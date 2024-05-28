
import PropTypes from 'prop-types';
const Calculation = ({ creditHour, remainingCredit, showCourses,totalPrice}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-[#2F80ED] text-base font-bold">Credit Hour Remaining {remainingCredit} hr</h2>
                    <p className="border"></p>
                    <div>
                        <p className="text-base font-bold">Course Name:</p>
                        {
                            showCourses.map((item,idx) => <ol key={idx} className='text-[#1C1B1B99]'>{idx+1} {item}</ol>)
                        }
                    </div>

                    <p className="border"></p>
                    <p className="text-base font-bold text-[#1C1B1BCC]">Total Credit Hour : {creditHour}</p>
                    <p className="border"></p>
                    <p className="text-base font-bold text-[#1C1B1BCC]">Total Price : {totalPrice} USD</p>
                    
                </div>
            </div>
        </div>
    );
};
Calculation.propTypes = {
    creditHour: PropTypes.number,
    remainingCredit: PropTypes.number,
    showCourses: PropTypes.array,
    totalPrice:PropTypes.number

};
export default Calculation;