from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import utils  # Funciones para procesar el resumen

app = FastAPI()

# Configuración de CORS para permitir solicitudes desde el frontend
origins = [
    "http://localhost:3000",
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SummaryItem(BaseModel):
    title: str
    content: str
    type: str  # Ejemplo: "Etapa", "Trastorno", etc.

@app.get("/summary", response_model=List[SummaryItem])
async def get_summary():
    """
    Lee el archivo de resumen y devuelve una lista de diccionarios.
    """
    data = utils.process_data("data/resumen.txt")
    return data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
