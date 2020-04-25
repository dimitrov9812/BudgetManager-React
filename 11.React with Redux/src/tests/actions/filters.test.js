import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';
test("should generate set start date action object", () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set end date action object", () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    })
});

test("should generate filter by amount action object", () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:"SORT_BY_AMOUNT"
    })
})

test("should generate filter by date action object", () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type:"SORT_BY_DATE"
    })
})

test("should generate set text filter action object", () =>{
    const textData = "text";
    const action = setTextFilter(textData);
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text: textData
    })
})


test("should generate set text filter action object with default values", () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text: ''
    })
})


