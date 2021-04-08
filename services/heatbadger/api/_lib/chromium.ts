import { launch, Browser } from "puppeteer-core";
import chromeAws from "chrome-aws-lambda";
import { isDev } from "./utils";

export async function createBrowser(args: ChromeLaunchOptions = {}): Promise<Browser> {
  const defaults: ChromeLaunchOptions = {
    defaultViewport: {
      deviceScaleFactor: 2,
      hasTouch: false,
      width: 900,
      height: 400,
      isLandscape: true,
      isMobile: false,
    }
  };
  let options: ChromeLaunchOptions = {};

  if (isDev()) {
    options = {
      ...defaults,
      ...args,
      ...{
        args: [],
        executablePath: lookupChrome(),
        headless: true,
      }
    };
  } else {
    options = {
      ...defaults,
      ...args,
      ...{
        args: chromeAws.args,
        executablePath: await chromeAws.executablePath,
        headless: chromeAws.headless,
      }
    };
  }

  return await launch(options);
}

function lookupChrome(): string {
  if (process.platform === 'win32') {
    return 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
  }

  if (process.platform === 'darwin') {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  }

  return 'google-chrome';
}
