


import * as React from 'react';



export const NumberGenerator = () => {

    function displayNums(num: number): string {
        var result:string = '';
        for (let i = 0; i < num; i++) {
          result += i.toString();
        }
        return result;
    }
  

    const onSubmit = (event: any) => {
        event.preventDefault();
        // Validate form data
        // ...

        const target = event.target;

        const data = {
            num: target.num.value,
        };
        for (let i = 0; i < data.num; i++) {
            return (i);
            // console.log(i);
        }


        console.log(data);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="field">
                <label htmlFor="num">Number</label>
                <input id="num" />
            </div>

            <button type="submit">Number Generate</button>
        </form>
    );
};
