import os

folder_path = r'C:\Users\setsunai\Desktop\websit-IVAN-main\category5'
files = sorted(os.listdir(folder_path))  # по имени

image_extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.gif']
image_files = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

# переименовываем файлы
for index, filename in enumerate(image_files, start=1):
    ext = os.path.splitext(filename)[1]
    new_name = f"{index}{ext}"
    os.rename(
        os.path.join(folder_path, filename),
        os.path.join(folder_path, new_name)
    )

print("Готово! Все файлы переименованы.")