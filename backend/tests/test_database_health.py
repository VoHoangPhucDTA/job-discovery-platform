from unittest.mock import MagicMock, patch

from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health_endpoint_returns_healthy():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "service": "job-discovery-api",
    }


def test_readiness_returns_connected_when_select_succeeds():
    connection = MagicMock()
    connection_context = MagicMock()
    connection_context.__enter__.return_value = connection

    engine = MagicMock()
    engine.connect.return_value = connection_context

    with patch("app.main.get_engine", return_value=engine):
        response = client.get("/health/ready")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ready",
        "database": "connected",
    }
    connection.execute.assert_called_once()


def test_readiness_returns_unavailable_without_leaking_error_details():
    engine = MagicMock()
    engine.connect.side_effect = RuntimeError(
        "mysql password=super-secret"
    )

    with patch("app.main.get_engine", return_value=engine):
        response = client.get("/health/ready")

    assert response.status_code == 503
    assert response.json() == {
        "status": "not_ready",
        "database": "unavailable",
    }
    assert "super-secret" not in response.text
