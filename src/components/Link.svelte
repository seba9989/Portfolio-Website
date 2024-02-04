<script lang="ts">
  export let className: string = "";
  export let href: string;
  export let scrollIntoViewOptions: ScrollIntoViewOptions = {
    behavior: "smooth",
    block: "start",
    inline: "center",
  };

  const scrollIntoView = () => {
    if (href === "#") {
      return scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({
      ...scrollIntoViewOptions,
    });
  };
</script>

<a {href} class={className} on:click|preventDefault={scrollIntoView}>
  <slot />
</a>
