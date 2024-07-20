# Проект на Spring Boot + Maven + Java21 && Node18 + React18 + Rsbuild

## Структура проекта
1. backend/ - исходный код Spring Boot приложения(сюда распаковать архив от Spring Boot)ю
2. docker-compose.yml - конфигурационный файл для Docker Compose, описывающий сервисы проекта.
3. frontend/ - исходный код React приложения.


### Запуск проекта

1. Клонируйте репозиторий на ваш локальный компьютер.
2. Перейдите в каталог проекта.
3. Запустите контейнеры с помощью Docker Compose:

```bash
docker-compose up
```
### Примечание:
Нужно подождать пока все зависимости установятся и проект соберется, после этого можно будет перейти по ссылкам ниже.

## Бэкенд
После запуска backend, Swagger будет доступeн тут:  [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

## Фронтенд
После запуска, frontend будет доступeн тут: [http://localhost:3000/](http://localhost:3000/)

### Ui & Components
Для генерации ui используется [ui.shadcn.com](https://ui.shadcn.com/), что позволяет масштабировать проект и ускорить разработку.
1. Переходим в директорию frontend( cd frontend ), далее:
2. Пример кода для генерации button
```bash
npx shadcn-ui@latest add button
```
3. Иконки из этой библиотеки: [https://lucide.dev/icons/](https://lucide.dev/icons/)