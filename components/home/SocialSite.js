import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import CustomLink from '../link';

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        fontSize: '12px',
        backgroundColor: theme.palette.common.black,
    },
}));


function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip placement="bottom-start" arrow classes={classes} {...props} />;
}

export default function SocialSite({ s, themeType, children }) {
    return (
        <BootstrapTooltip key={s.href} title={s.hoverText}>
            <li>
                <CustomLink href={s.href} rel="noopener noreferrer" className={s.className} style={themeType === 'light' ? { backgroundColor: '#F5F5F5' } : {}}>
                    {children}
                    {!children && <i style={{ color: s[themeType] || s.color }} className={s.icon_className} />}
                </CustomLink>
            </li>
        </BootstrapTooltip>
    );
}
