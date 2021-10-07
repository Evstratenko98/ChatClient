import React from 'react';
import { useSelector } from 'react-redux';

const ModuleAccess = ({ permissions, children, denied }) => {
  const { role } = useSelector((state) => state.user);
  const allowed = permissions.includes(role);

  const defaultDenied = (
    <div className="access__denied">Доступ к запрашиваемому ресурсу ограничен</div>
  );

  const content = allowed ? children : denied || defaultDenied;
  return content;
};

export default ModuleAccess;
