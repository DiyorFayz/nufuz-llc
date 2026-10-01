/**
 * NUFUZ LC — Telegram Form Integration
 * Sends lead data to Telegram Bot API
 *
 * ⚙️  SOZLASH: Quyidagi o'zgaruvchilarni to'ldiring:
 *   BOT_TOKEN  — BotFather dan olingan token
 *   CHAT_ID    — Ariza tushadigan guruh/kanal ID-si
 */

const TELEGRAM_CONFIG = {
  BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',   // ← Bu yerga tokeningizni qo'ying
  CHAT_ID:   'YOUR_CHAT_ID_HERE',     // ← Bu yerga chat ID-ni qo'ying
};

/* --- Helpers --- */
function getCleanPhone(inputValue) {
  let digits = inputValue.replace(/\D/g, '');
  if (!digits.startsWith('998')) {
    digits = '998' + digits;
  }
  return '+' + digits;
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString('uz-UZ', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
    timeZone: 'Asia/Tashkent'
  });
}

function formatCourse(value) {
  const map = {
    ielts: '🎯 IELTS Intensive',
    cefr:  '📋 CEFR (B1 / B2 / C1)',
    general: '📚 General English',
  };
  return map[value] || value;
}

async function sendToTelegram(data) {
  const message = `
🔔 <b>Yangi ariza — Nufuz LC</b>

👤 <b>Ism:</b> ${data.name}
📞 <b>Tel:</b> ${data.phone}
🎯 <b>Yo'nalish:</b> ${data.course}
📅 <b>Vaqt:</b> ${data.time}
🌐 <b>Manba:</b> nufuz-lc.uz
  `.trim();

  const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CONFIG.CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.description || 'Telegram API xatosi');
  }

  return true;
}

/* --- Form Handler Factory --- */
function setupForm(formId, phonInputId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    const nameInput  = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const courseSelect = form.querySelector('[name="course"]');

    // Validation
    const name   = nameInput?.value.trim();
    const phone  = getCleanPhone(phoneInput?.value || '');
    const course = courseSelect?.value;

    if (!name || name.length < 2) {
      showToast('❌ Ism-familiyani to\'liq kiriting', true);
      nameInput?.focus();
      return;
    }

    if (!phone || phone.length < 13) {
      showToast('❌ Telefon raqamni to\'g\'ri kiriting', true);
      phoneInput?.focus();
      return;
    }

    if (!course) {
      showToast('❌ Yo\'nalishni tanlang', true);
      courseSelect?.focus();
      return;
    }

    // Loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" style="animation:spin 1s linear infinite">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.3"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
      </svg>
      Yuborilmoqda...
    `;
    submitBtn.disabled = true;

    try {
      await sendToTelegram({
        name,
        phone,
        course: formatCourse(course),
        time: getCurrentTime(),
      });

      // Success
      form.reset();
      showToast('✅ Arizangiz qabul qilindi! Tez orada bog\'lanamiz.');

      // Close modal if inside one
      if (form.closest('#modal-overlay')) {
        setTimeout(() => closeModal?.(), 1200);
      }

    } catch (err) {
      console.error('Telegram send error:', err);
      showToast('⚠️ Xatolik yuz berdi. Bizga Telegram orqali murojaat qiling.', true);
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Spin keyframe
const style = document.createElement('style');
style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(style);

/* --- Initialize both forms --- */
document.addEventListener('DOMContentLoaded', () => {
  setupForm('main-form', 'phone');
  setupForm('modal-form', 'modal-phone');
});
