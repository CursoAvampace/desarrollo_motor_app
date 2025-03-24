def process_data(file_path: str) -> list:
    """
    Procesa el archivo de texto y genera una lista de diccionarios con el resumen.
    """
    summary_data = []
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.readlines()
        item = {}
        for line in content:
            # Se identifica el tipo (p.ej., "Etapa" o "Trastorno")
            if line.startswith("# "):
                if item:
                    summary_data.append(item)
                item = {}
                item['type'] = line[2:].strip()
            # Se identifica el título (usando "##")
            elif line.startswith("## "):
                item['title'] = line[3:].strip()
            # Se acumula el contenido de cada sección
            elif line.strip():
                if 'content' in item:
                    item['content'] += line.strip() + " "
                else:
                    item['content'] = line.strip() + " "
    if item:
        summary_data.append(item)
    return summary_data
