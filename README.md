grab
====

Firefox extension to grab a page as a image file, that's what it does.


<script type="application/javascript">
<!--
function install (aEvent)
{
  var params = {
    "Foo": { URL: aEvent.target.href,
             IconURL: aEvent.target.getAttribute("iconURL"),
             Hash: aEvent.target.getAttribute("hash"),
             toString: function () { return this.URL; }
    }
  };
  InstallTrigger.install(params);

  return false;
}
-->
</script>

<a href="https://github.com/downloads/muanis/grab/grab_v0.97.xpi"
  iconURL="http://www.example.com/foo.png"
  hash="sha1:f3baddc1f61da685939d9cc9a6c54284d3239ade"
  onclick="return install(event);">Install grab!</a>


Just click  to install
