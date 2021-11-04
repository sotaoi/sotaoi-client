import { app } from '@sotaoi/client/app-kernel';
import { Lang } from '@sotaoi/omni/contracts/lang';

const lang = (): Lang => app().get<Lang>('app.system.lang');

export { lang };