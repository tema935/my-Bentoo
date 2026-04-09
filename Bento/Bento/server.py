#!/usr/bin/env python3
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

# === КРИТИЧЕСКИ ВАЖНО: Указываем абсолютный путь к папке со стартовой страницей ===
WEB_ROOT = "/home/tema/Bento/"
os.chdir(WEB_ROOT)  # Меняем текущую директорию для процесса сервера
# print(f"[INFO] Рабочая директория сервера установлена: {os.getcwd()}")
# print(f"[INFO] Файл index.html существует: {os.path.exists('index.html')}")


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Добавляем заголовки, запрещающие кэширование
        self.send_header(
            "Cache-Control", "no-store, no-cache, must-revalidate, max-age=0"
        )
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    server = HTTPServer(("localhost", 8088), NoCacheHandler)
    # print("Запуск сервера без кэша на http://localhost:8088")
    server.serve_forever()
