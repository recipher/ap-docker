import { ConfigurationService } from './configuration/configuration.service';

const config = new ConfigurationService();

export default config.get('database');