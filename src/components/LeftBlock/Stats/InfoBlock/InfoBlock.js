import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import style from './InfoBlock.module.css'

function InfoBlock({title, cases, active, isRed, total, ...props}) {
    return (
        <div className={style.infoBlock}>
            <Card
                onClick={props.onClick}
                className={style.infoBox + ' ' + (active && style.infoBoxSelected) + ' ' + (isRed && style.infoBoxRed)}
            >
                <CardContent>
                    {/* Title */}
                    <Typography className={style.title} color='textSecondary'>
                        {title}
                    </Typography>

                    {/* Cases */}
                    <h2 className={style.cases + ' ' + (!isRed && style.casesGreen)}>{cases || '0'}</h2>

                    {/* Total */}
                    <Typography className={style.total} color='textSecondary'>
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBlock
