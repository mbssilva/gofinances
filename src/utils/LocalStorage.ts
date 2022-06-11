// import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-community/async-storage';

class LocalStorage {
  addItem: (
    collection: string,
    data: object,
    clearAndForceCollectionCasting?: boolean
  ) => Promise<void>;
  setItem: (collection: string, data: object) => Promise<void>;
  getItem: (collection: string) => Promise<any>;
  removeAll: (collection: string) => Promise<void>;

  constructor() {
    const keyPrefix = "@gofinances:";

    this.addItem = async (collection, data, forceCasting = true) => {
      const jsonData = await AsyncStorage.getItem(keyPrefix + collection);
      let currentData = jsonData ? JSON.parse(jsonData) : [];

      if (forceCasting && !Array.isArray(currentData))
        currentData = [];

      currentData.push(data);
      await this.setItem(keyPrefix + collection, currentData);
    };

    this.setItem = (collection, data) =>
      AsyncStorage.setItem(keyPrefix + collection, JSON.stringify(data));

    this.getItem = async (collection) => {
      const jsonData = await AsyncStorage.getItem(keyPrefix + collection);
      return jsonData && JSON.parse(jsonData);
    };

    this.removeAll = (collection) =>
      AsyncStorage.removeItem(keyPrefix + collection);
  }
}

export default new LocalStorage();
