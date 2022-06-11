import AsyncStorage from "@react-native-community/async-storage";

class LocalStorage {
  #keyPrefix = "@gofinances:";

  async addItem(
    collection: string,
    data: object,
    clearCollectionAndForceCasting: boolean = true
  ) {
    const path = this.#keyPrefix + collection;

    let currentData = await this.getItem(path);

    if (clearCollectionAndForceCasting && !Array.isArray(currentData))
      currentData = [];

    if (Array.isArray(currentData)) {
      currentData.push(data);
      await this.setItem(path, currentData);
    } else {
      throw new Error("Data was not storaged.");
    }
  }

  setItem(collection: string, data: object) {
    const path = this.#keyPrefix + collection;

    return AsyncStorage.setItem(path, JSON.stringify(data));
  }

  async getItem(collection: string) {
    const path = this.#keyPrefix + collection;

    const jsonData = await AsyncStorage.getItem(path);
    return jsonData && JSON.parse(jsonData);
  }

  removeAll(collection: string) {
    const path = this.#keyPrefix + collection;

    return AsyncStorage.removeItem(path);
  }
}

export default new LocalStorage();
