> JS modules
We can use exports and require
We can use global and require

> NODE modules .NODE
if we want good optimization and OS features

> JSON modules
when we want to save data in the simplest form and then use it

> create module DIR/index
in the beginning node searches for user.js then the directory user and he finds such directory he finds index.js there

> object module
object module is variable that is avalible in every file

{id, export, parent, filename, loaded, children, paths}

properties export and parent are used more often

>parent
with this property we can divide two usage of js file
file as executable and file as module

>export


когда нода загружает модуль она полностью задает соответсвующий ему объект модуль
парент жкспорт и тд
модуль id служит идентификатором для внутреннего кэша

первый раз когда модуль используется - он инициализируется

кэширование модулей
расположение модулей, порядок поиска

передаем параметры модуль фабрика
