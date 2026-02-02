document.addEventListener('DOMContentLoaded', () => {
  const genderInput = document.getElementById('Gender');
  const birthInput = document.getElementById('Birthdate');
  const submitBtn = document.getElementById('Submit');
  const resultDiv = document.getElementById('akan-name');

  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

  function normalizeGender(g) {
    if (!g) return null;
    const s = g.trim().toLowerCase();
    if (s === 'male' || s === 'm') return 'male';
    if (s === 'female' || s === 'f') return 'female';
    return null;
  }

  function validateBirth(birth) {
    if (!birth) return { ok: false, msg: 'Please enter your birthdate.' };
    const date = new Date(birth);
    if (Number.isNaN(date.getTime())) return { ok: false, msg: 'Invalid date format.' };
    const today = new Date();
    today.setHours(0,0,0,0);
    if (date > today) return { ok: false, msg: 'Birthdate cannot be in the future.' };
    const year = date.getFullYear();
    if (year < 1900) return { ok: false, msg: 'Please enter a realistic year (>= 1900).' };
    return { ok: true, date };
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resultDiv.textContent = '';
    const genderRaw = genderInput.value;
    const birthRaw = birthInput.value; // expected format: YYYY-MM-DD

    const gender = normalizeGender(genderRaw);
    if (!gender) {
      resultDiv.textContent = "Please enter gender as 'Male' or 'Female'.";
      return;
    }

    const birthCheck = validateBirth(birthRaw);
    if (!birthCheck.ok) {
      resultDiv.textContent = birthCheck.msg;
      return;
    }

        const date = birthCheck.date;
        // Extract components for formula
        const parts = birthRaw.split('-'); // YYYY-MM-DD
        if (parts.length !== 3) { resultDiv.textContent = 'Invalid date format.'; return; }
        const year = Number(parts[0]);
        const month = Number(parts[1]);
        const dayOfMonth = Number(parts[2]);
        const CC = Math.floor(year / 100);
        const YY = year % 100;
        const MM = month;
        const DD = dayOfMonth;

        // Compute d using the provided formula with integer divisions where appropriate
        let d = (Math.floor(CC / 4) - 2 * CC - 1)
          + Math.floor((5 * YY) / 4)
          + Math.floor((26 * (MM + 1)) / 10)
          + DD;
        d = ((d % 7) + 7) % 7; // normalize to 0..6

        // Mapping: 1 -> Sunday, 2 -> Monday, ..., 6 -> Friday, 7 -> Saturday
        const idx = (d + 6) % 7; // converts formula result to 0=Sunday..6=Saturday
        const name = gender === 'male' ? maleNames[idx] : femaleNames[idx];
        const day = dayNames[idx];
    resultDiv.textContent = `You were born on ${day}. Your Akan name is ${name}.`;
  });
});