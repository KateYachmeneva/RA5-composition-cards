import "./App.css";
import Card from "./Components/Card/Card";
import CardTitle from "./Components/Card/CardTitle/CardTitle";
import CardText from "./Components/Card/CardText/CardText";
import Button from "./Components/Button/Button";

const URL = "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/54eab538-be45-4d58-bf5d-c83f86cb252c/3840x";
const URLTWO = "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/89c43dde-6bb9-4c1d-8e2c-59c3af5430d6/800x800";

function App() {
  return (
    <div className="container pt-5 d-flex">
      <Card imageURL={URL} 
            style={{ width: "20rem", marginRight: "50px" }}
            >
        <CardTitle>Анатомия страсти: Вторая команда </CardTitle>
        <CardText>
          Сериал рассказывает о молодых врачах, делающих свои первые шаги в
          больнице «Грей-Слоан Мемориальный госпиталь».
        </CardText>
        <Button>Подробнее</Button>
      </Card>
      <Card style={{width: '20rem'}}
            imageURL={URLTWO}>
      <CardTitle>Звёздные войны. Эпизод I: Скрытая угроза</CardTitle>
      <CardText>Неспокойные времена настали для Галактической Республики. Налогообложение торговых путей к отдаленным
        солнечным системам стало причиной раздоров.</CardText>
      <Button>Узнать больше</Button>
    </Card>
    </div>
  );
}

export default App;

console.log(App);