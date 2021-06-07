type mountApplication = (state?: any) => void;

interface BaseApplication {
  mount: mountApplication
}

export class ApplicationRegistrar {
  private _applications: Set<BaseApplication> = new Set();

  private _mount(application: BaseApplication) {
    application.mount();
  }

  bootstrap(): this {
    this._applications.forEach(this._mount);

    return this;
  }

  register(application: BaseApplication): this {
    this._applications.add(application);

    return this;
  }
}
