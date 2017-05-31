#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QQmlComponent>

int main(int argc, char *argv[])
{
    QGuiApplication app(argc, argv);

    QQmlApplicationEngine engine;
//    QQmlComponent component(&engine, QUrl("qrc:/main.qml"));
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

//    QQmlComponent component;
//    component
    return app.exec();
}
