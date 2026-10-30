
import os
import ssl
from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import URL, create_engine
from sqlalchemy.engine import Engine


BACKEND_DIR = Path(__file__).resolve().parents[2]
load_dotenv(BACKEND_DIR / ".env")


@lru_cache(maxsize=1)
def get_engine() -> Engine:
    required_variables = [
        "DB_HOST",
        "DB_PORT",
        "DB_NAME",
        "DB_USER",
        "DB_PASSWORD",
        "DB_SSL_CA_PATH",
    ]

    missing = [
        key for key in required_variables
        if not os.getenv(key)
    ]

    if missing:
        raise RuntimeError(
            f"Missing database configuration: {', '.join(missing)}"
        )

    ca_path = Path(
        os.environ["DB_SSL_CA_PATH"]
    ).expanduser()

    if not ca_path.is_absolute():
        ca_path = BACKEND_DIR / ca_path

    if not ca_path.is_file():
        raise RuntimeError(
            "MySQL CA certificate file was not found."
        )

    ssl_context = ssl.create_default_context(
        cafile=str(ca_path)
    )

    database_url = URL.create(
        drivername="mysql+pymysql",
        username=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"],
        host=os.environ["DB_HOST"],
        port=int(os.environ["DB_PORT"]),
        database=os.environ["DB_NAME"],
        query={"charset": "utf8mb4"},
    )

    engine = create_engine(
        database_url,
        connect_args={
            "ssl": ssl_context,
            "connect_timeout": 10,
        },
        pool_pre_ping=True,
        pool_recycle=1800,
    )

    return engine
