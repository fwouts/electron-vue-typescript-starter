import "reflect-metadata";
import { Container, injectable } from "inversify";
import entities from "./entities";
import AppService from "./services/app.service";

/**
 * Create the DI Container
 *
 * @type {Container}
 */
let container = new Container();

/**
 * Bind all entities into the DI Container
 */
for(let entity of entities) {
    if (entity) {
        container.bind<any>(entity).toSelf().inSingletonScope();
    }
}

/**
 * Entry point of your app
 */
@injectable()
class App {
    constructor(private appService: AppService) {
    }

    start() {
        this.appService.start();
    }
}

/**
 * Load App class from the container
 *
 * @type {App}
 */
const app = container.resolve(App);

app.start();