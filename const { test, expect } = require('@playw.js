const { test, expect } = require('@playwright/test');

// filepath: c:\Users\Administrador\Documents\Codeceptjs_web\login_test.test.js

test.describe('Login Tests', () => {
    test('logar apenas com email', async ({ page }) => {
        // Navigate to the login page
        await page.goto('http://automationpratice.com.br');

        // Fill in the email field
        await page.fill('#user', 'junynho2011@gmail.com');

        // Attempt to log in without filling the password
        await page.click('#btnLogin');

        // Assert that an error message is displayed
        const errorMessage = await page.locator('.error-message'); // Replace with actual selector
        await expect(errorMessage).toHaveText('Senha é obrigatória'); // Replace with actual error text
    });
});