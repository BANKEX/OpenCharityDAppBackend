Settings for DAPP: actual organizations addresses and smart-contracts abi.

### GET /api/settings/getOrganizationList/:type
Получение настроек сети<br/>
type - `0` или `-1`. 0 - настройки по умолчанию. -1 - настройки для dev-окружения.
Возвращает { type, list, abis }

### POST /api/settings/setOrganizationList
Сохраняет настройки сети<br/>
Принимает 3 обязательных поля: type, list, abis<br/>
type - `0` или `-1`. 0 - настройки по умолчанию. -1 - настройки для dev-окружения.
list - строковый массив адресов организаций
abis - объект с обязательными полями { Organization, CharityEvent, IncomingDonation, OpenCharityToken },
в которых передаются abi.<br/>
Возвращает 'Ok'.
