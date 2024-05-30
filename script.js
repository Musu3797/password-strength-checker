// script.js
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthElement = document.getElementById('strength');
    const tipsElement = document.getElementById('tips');
    const { strength, tips } = checkPasswordStrength(password);

    strengthElement.textContent = `Strength: ${strength}`;
    tipsElement.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
});

function checkPasswordStrength(password) {
    let strength = 'Weak';
    const tips = [];

    if (password.length >= 8) {
        strength = 'Moderate';
        if (/[A-Z]/.test(password)) {
            strength = 'Strong';
        }
        if (/[0-9]/.test(password)) {
            strength = 'Very Strong';
        }
        if (/[@$!%*?&#]/.test(password)) {
            strength = 'Excellent';
        }
    } else {
        tips.push('Password should be at least 8 characters long.');
    }

    if (!/[A-Z]/.test(password)) {
        tips.push('Add at least one uppercase letter.');
    }

    if (!/[0-9]/.test(password)) {
        tips.push('Include at least one number.');
    }

    if (!/[@$!%*?&#]/.test(password)) {
        tips.push('Add at least one special character (e.g., @, $, !, %, *, ?, &).');
    }

    return { strength, tips };
}