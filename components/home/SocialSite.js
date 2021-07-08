import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import CustomLink from '../link';
import PropTypes from 'prop-types';

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

function SocialSite({ s, themeType, children }) {
  return (
    <BootstrapTooltip key={s.href} title={s.hoverText}>
      <li>
        <CustomLink target={s.target} href={s.href} rel="noopener noreferrer" className={s.className} style={themeType === 'light' ? { backgroundColor: '#F5F5F5' } : {}}>
          {children}
          {!children && <i style={{ color: s[themeType] || s.color }} className={s.icon_className} />}
        </CustomLink>
      </li>
    </BootstrapTooltip>
  );
}

SocialSite.propTypes = {
  s: PropTypes.object.isRequired,
  themeType: PropTypes.string,
  children: PropTypes.any
};

export default SocialSite;
