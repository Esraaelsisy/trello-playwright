import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import { HomePage } from "./home.page";
import { BoardPage } from "./board.page";
import { CardPage } from "./card.page";

export class PageManager {
  readonly loginPage: LoginPage;
  readonly homePage: HomePage;
  readonly boardPage: BoardPage;
  readonly cardPage: CardPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.boardPage = new BoardPage(page);
    this.cardPage = new CardPage(page);
  }
}
