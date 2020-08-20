export default class Requests {
  private items: object = {};

  public update(x: string, cancel: () => void): void {
    // Execute the cancel funciton
    if (typeof this.items[x] === "function") {
      this.items[x]();
    }

    // Update the cancel function
    this.items[x] = cancel;
  }
}
