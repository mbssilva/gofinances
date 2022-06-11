import AsyncStorage from "@react-native-async-storage/async-storage";

import configs from "../global/configs";

class PhoneStorage {
  #keyPrefix = configs.ASYNC_STORAGE_PREFIX + ":";

  async addItem(
    collection: string,
    data: object | string | number,
    clearCollectionAndForceCasting: boolean = true
  ): Promise<void> {
    let currentData = (await this.getItem(collection)) || [];

    if (clearCollectionAndForceCasting && !Array.isArray(currentData))
      currentData = [];

    if (Array.isArray(currentData)) {
      currentData.push(data);
      await this.setItem(collection, currentData);
    } else {
      throw new Error("Data was not storaged.");
    }
  }

  setItem(collection: string, data: object | string | number): Promise<void> {
    const path = this.#keyPrefix + collection;

    return AsyncStorage.setItem(path, JSON.stringify(data));
  }

  async getItem(collection: string): Promise<object | string | number | null> {
    const path = this.#keyPrefix + collection;

    const jsonData = await AsyncStorage.getItem(path);

    return jsonData && JSON.parse(jsonData);
  }

  clearCollection(collection: string): Promise<void> {
    const path = this.#keyPrefix + collection;

    return AsyncStorage.removeItem(path);
  }

  async clearAllCollections(): Promise<void> {
    const prefixLength = this.#keyPrefix.length;
    const allKeys = await AsyncStorage.getAllKeys();

    const keysOfThisPrefix = allKeys.filter(
      (key) => key.substring(0, prefixLength) === this.#keyPrefix
    );

    return AsyncStorage.multiRemove(keysOfThisPrefix);
  }
}

export default new PhoneStorage();
