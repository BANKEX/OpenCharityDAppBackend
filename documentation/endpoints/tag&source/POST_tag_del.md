### POST /api/tag/del
Удаление тэгов.<br/>
Принимает строковый или числовой массив tag.<br/>
Если массив полностью числовой, считается, что это массив ID тэгов и удаление производится по найденным tagID<br/>
Возвращает результат удаления в БД.