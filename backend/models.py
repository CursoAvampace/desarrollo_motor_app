from pydantic import BaseModel

class SummaryItem(BaseModel):
    title: str
    content: str
    type: str
