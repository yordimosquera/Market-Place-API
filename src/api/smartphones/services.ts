import { Smartphone } from "./model";

export const Services = {
  findSmartphones: async (query: any) => {
    try {
      const data = await (!!query ? Smartphone.find(query) : Smartphone.find());
      return { items: data, size: data.length };
    } catch (error) {
      console.log(error);
    }
  },
  findSmartphone: async (id: string) => {
    try {
      const data = await Smartphone.findById(id);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
