import {getTripLayout} from "./components/trip";
import {getMenuLayout} from "./components/menu";
import {getFiltersLayout} from "./components/filters";
import {getSortLayout} from "./components/sort";
import {getDayItemLayout} from "./components/day-item";
import {getEditItemLayout} from "./components/edit-item";
import {getEventItemLayout} from "./components/event-item";

const renderComponent = (container, layout, place = `beforeend`) => {
  container.insertAdjacentHTML(place, layout);
};

const tripInfoElement = document.querySelector(`.trip-info`);
const tripControlsElement = document.querySelector(`.trip-controls`);
const tripEventElement = document.querySelector(`.trip-events`);

renderComponent(tripInfoElement, getTripLayout(), `afterbegin`);
renderComponent(tripControlsElement, getMenuLayout(), `afterend`);
renderComponent(tripControlsElement, getFiltersLayout());
renderComponent(tripEventElement, getSortLayout());

const dayList = document.createElement(`ul`);
dayList.classList.add(`trip-days`);

tripEventElement.appendChild(dayList);

renderComponent(dayList, getEventItemLayout());

const eventList = document.querySelector(`.trip-events__list`);

renderComponent(eventList, getEditItemLayout());

Array(3).fill(``).forEach(() => renderComponent(eventList, getEventItemLayout()));
