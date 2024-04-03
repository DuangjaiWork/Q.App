import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@Birth"; //เปลี่ยนแค่ KEY
//อ่านข้อมูล
const readItem = async () => {
    try {
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let item = string_value != null ? string_value : "00-00-0000";
        return item;
    } catch (error) {
        console.log(error);
    }
};
//เขียนข้อมูล
const writeItem = async (value) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, value.toString());
    } catch (error) {
        console.log(error);
    }
};

export default { readItem, writeItem };