import axios from "axios";
import { microservices } from "../microservice-config";

const impersationSettingName = 'impersonation';

export class SystemSettingsAdapter {
    public async allowImpersonationUsingPartyId(){
        const systemSetting = await this.getSettingByName(impersationSettingName);
        return systemSetting?.value?.searchForUserByPathParameter;
    }

    public async getSettingByName(name: string) {
        const response = await axios.get(`${microservices.systemSettings.getFullURL()}/${name}`);
        return response?.data;
    }
}