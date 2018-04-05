### GET /api/settings/getOrganizationList/:type
Получение настроек сети<br/>
type - `0` или `-1`. 0 - настройки по умолчанию. -1 - настройки для dev-окружения.
Возвращает { type, list, abis }