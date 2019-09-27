
// This class will contain the methods shared between all parts
class Util {

    public constructor () {

        this.stringParse = this.stringParse.bind(this);
        this.checkRequired = this.checkRequired.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);

    }

    /**
     * stringParse - Responsible of parsing the string when received from HTTP request
     *
     * @param  {string} value String passed to be parsed
     * @return {string} parsed string
     */
    protected stringParse (value): string {

        return value
            .toString()
            .trim()
            .replace(new RegExp("'",'g'), "");

    }


    /**
     * checkRequired - Check if parameters values are undefined
     *
     * @param  {object} values object with the values for checking
     * @return {array}         array with the missing parameters names
     */
    protected checkRequired (values): string[] {

        return Object.keys(values).filter((name): boolean => ((typeof(values[name]) === "undefined") || (values[name] === null)));
        
    }


    /**
     * error - Format the error response
     *
     * @param  {any} error error to be passed
     * @return {object}       Formatted object to send the error in the response
     */
    protected error (error: any | string = "Something went wrong"): object {

        console.log(`${new Date()} ${error}`);

        return {
            "status": false,
            "data" : {},
            error
        };

    }

    /**
     * success - Format the success response
     *
     * @param  {any} msg Message to be passed
     * @return {object}  Formatted object to send the success in the response
     */
    protected success (data = null): object {

        if (data) return {"status": true,data};
            
        return {"status": true};

    }

}

export default Util;
