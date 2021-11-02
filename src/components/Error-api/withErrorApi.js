import React, {useState} from 'react';

export const withErrorApi = View => {

    return props => {

        const [errorApi, setErrorApi] = useState(false)

        return (
            <>
                {errorApi ? <h1>ERROR</h1>
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        );
    }
}