
import { TestWatcher } from "jest"
import { Builder, Capabilities, By } from "selenium-webdriver"
import { isExportDeclaration } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking on Draw button displays choices', async() => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking on "Add to Duo"button displays player-duo', async() => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})