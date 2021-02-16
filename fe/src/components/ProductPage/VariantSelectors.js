import React from 'react'; /* eslint-disable */

const VariantSelector = ({key, onChange, options}) => {
    return (
        <div className="field ">
            <label className="label">{options.name} </label>

            <div className="control">
                <div className="select is-fullwidth">
                    <select onChange={(e) => (onChange(e, options))} name={(options.name)} key={options.id}>
                        {
                            options.values.map((value, index) => (
                                <option 
                                    key={`${options.name}-${value}-${index}`}
                                    value={value}
                                    className={`is-medium ${options.name}-${value}-${index}`}
                                >
                                    {`${value}`}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default VariantSelector;