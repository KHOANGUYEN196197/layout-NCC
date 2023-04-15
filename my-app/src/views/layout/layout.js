
import css from '../../img/css-icon 1.svg'
import hlmt from '../../img/html-icon 1.svg'
import url from '../../img/url-icon 1.svg'

function Layout() {
  return (
    <div className="layout">
     <div className="top-layout">
      <div className="wrap-top-layout">
        <div className="title">Lorem ipsum dolor sit asmet?</div>
        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</div>
      </div>
     </div>
     <div className="bot-layout">
      <div className="wrap-bot-layout">
        <div className="box">
          <div className="title">Lorem ipsum dolor sit asmet?</div>
          <div className="bot-content">
            <img src={css} alt="" />
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</div>
          </div>
        </div>
        <div className="box">
          <div className="title">Lorem ipsum dolor sit asmet?</div>
          <div className="bot-content">
            <img src={hlmt} alt="" />
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</div>
          </div>
        </div>
          <div className="box">
          <div className="title">Lorem ipsum dolor sit asmet?</div>
          <div className="bot-content">
            <img src={url} alt="" />
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Layout;
