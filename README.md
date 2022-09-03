# Блок Progress
Тестовое задание для Ozon FinTech

<a href="https://mordvintsevmv.github.io/progressPage/" target="_blank">Проверить работу</a>

---

## <a name="content">Оглавление</a>

0. [Задание](#task)
1. [Макет](#layout)
2. [Реализация](#realization)
   1. [Класс progressRing](#realization_class)
   2. [Input](#realization_input)
3. [Пример работы](#test)
4. [Контакты](#contacts)


[🔝К оглавлению🔝](#content)

---

## <a name="task">Задание</a>

Разработать прототип блока Progress для использования в мобильных web-приложениях. Основное предназначение блока отображать процесс выполнения процессов и их прогресс выполнения.

__Особенности:__

• Блок должен иметь API для управления его состоянием.

• Блок должен быть спроектирован так, чтобы его было легко переиспользовать в
других приложениях.

__Состояния:__

      • Normal – базовое состояние, в котором путём задания Value можно управлять размером дуги, отражающей некоторый параметр или прогресс процесс. Начало дуги соответствует 12 часам, конец дуги при увеличении параметра Value движется по направлению часовой стрелки и достигает начала при значении 100.
      • Animated – независимое состояние, при котором блок или его элементы начинают вращаться с некоторым периодом по часовой стрелке.
      • Hidden – состояние скрывающее блок со страницы.

Результат выполнения задачи должен быть представлен в виде небольшого
приложения с элементами управления (Value – текстовый ввод числа от 0 до 100,
Animate и Hide – логические переключатели on / off, см. Макеты ).

Приложение должно быть адаптирующимся под ориентацию экрана – будет большим
плюсом.

Технологии:

      • JS (без jQuery и других библиотек / фреймворков, упрощающих и дополняющих функциональность окружения браузера).
      • CSS или любые другие пре/постпроцессоры.
      • HTML (без использования шаблонизаторов).


[🔝К оглавлению🔝](#content)

---

## <a name="layout">Макет</a>

![alt](img/layout.png)

[🔝К оглавлению🔝](#content)

---

## <a name="realization">Реализация</a>

### <a name="realization_class">Класс progressRing</a>

### <a name="realization_input">Input</a>


[🔝К оглавлению🔝](#content)

---

## <a name="test">Пример работы</a>

IOS Safari:

<img src="img/test/ios_safari_h.PNG" alt="alt" width="400"/>

<img src="img/test/ios_safari_v.PNG" alt="alt" height="400"/>

<img src="img/test/ios_safari_hide.PNG" alt="alt" height="400"/>


MacOS Safari:

<img src="img/test/macos_safari_v.png" alt="alt" height="400"/>

<img src="img/test/macos_safari_h.png" alt="alt" width="400"/>

<img src="img/test/macos_safari_hide.png" alt="alt" width="400"/>



[🔝К оглавлению🔝](#content)

---

## <a name="contacts">Контакты</a>

[🔝К оглавлению🔝](#content)

**TG**: @mordvintsevmv

**e-mail**: mordvintsevmv@gmail.com

[🔝К оглавлению🔝](#content)

