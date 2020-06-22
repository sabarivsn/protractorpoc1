import { BeforeAll, setDefaultTimeout } from "cucumber";

BeforeAll( ()=> {
    setDefaultTimeout(20 * 1000);
});