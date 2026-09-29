import { test, expect } from '@playwright/test'


test.describe.skip('LoginTests', () => {


    test('HomePageTitle', async ({ page }) => {
        console.log('This is Home Page Title Test')

    })

    test('HomePageHeadindTest', async ({ page }) => {

        console.log('This is Home Page Heading Test')

    })




})



test.describe('LoginTests', () => {



    test('ValidLoginTest', async ({ page }) => {

        console.log('This is Valid Login Test')

    })

    test('InValidLoginTest', async ({ page }) => {

        console.log('This is InValid Login Test')

    })




})

