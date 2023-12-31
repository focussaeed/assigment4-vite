import { Button } from "./Button";
import { Input } from "./Input";


const Section02 = () => {
    return (
        <div className="sec2A">

            <div className='sec2B'> 
                <h3>Generate more leads with a</h3>
                <h3>professional landing page!</h3>

                <form className="row g-3">

                    <div className="col-auto">

                    <Input 
                        type="Text"
                        placeholder="Enter Email"

                        />
                    </div>

                    <div class="col-auto">
                        <Button label="Submit" />
                    </div>

                </form>

            </div>

        </div>
      
    );
  };
  
  export {Section02};

  const Section06 = () => {
    return (
        <div className="sec2A">

            <div className='sec2B'> 
                <h3>Ready to get started? Sign up now</h3>

                <form className="row g-3">

                    <div className="col-auto">

                        <Input 
                        type="Text"
                        placeholder="Enter Email for signup"

                        />
                    </div>

                    <div class="col-auto">
                        <Button label="Submit" />
                    </div>

                </form>
            </div>

        </div>
      
    );
  };
  
  export {Section06};