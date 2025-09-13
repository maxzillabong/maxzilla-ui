import { html, fixture, expect } from '@open-wc/testing';
import { MzAvatar } from './mz-avatar.js';
import './mz-avatar.js';

describe('mz-avatar', () => {
  describe('rendering', () => {
    it('should render with default properties', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar></mz-avatar>`);

      expect(el).to.exist;
      expect(el).to.be.instanceOf(MzAvatar);
      expect(el.size).to.equal('md');
      expect(el.shape).to.equal('circle');
      expect(el.src).to.equal('');
      expect(el.alt).to.equal('');
      expect(el.name).to.equal('');
      expect(el.clickable).to.be.false;
      expect(el.loading).to.be.false;
    });

    it('should render avatar container', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar></mz-avatar>`);
      const avatar = el.shadowRoot!.querySelector('.avatar');

      expect(avatar).to.exist;
      expect(avatar?.classList.contains('avatar')).to.be.true;
    });

    it('should render slot content when no image or name provided', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar>JD</mz-avatar>`);

      const slot = el.shadowRoot!.querySelector('slot');
      expect(slot).to.exist;

      const nodes = (slot as HTMLSlotElement)?.assignedNodes();
      expect(nodes?.[0]?.textContent).to.equal('JD');
    });
  });

  describe('image avatar', () => {
    it('should render image when src is provided', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/avatar.jpg" alt="User Avatar"></mz-avatar>
      `);

      const img = el.shadowRoot!.querySelector('img');
      expect(img).to.exist;
      expect(img?.src).to.include('/avatar.jpg');
      expect(img?.alt).to.equal('User Avatar');
    });

    it('should not render slot content when image is present', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/avatar.jpg" alt="User">JD</mz-avatar>
      `);

      const img = el.shadowRoot!.querySelector('img');
      const slot = el.shadowRoot!.querySelector('slot');

      expect(img).to.exist;
      expect(slot).to.not.exist;
    });

    it('should handle image load error and fallback to initials', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/nonexistent.jpg" name="John Doe"></mz-avatar>
      `);

      const img = el.shadowRoot!.querySelector('img') as HTMLImageElement;
      if (img) {
        // Simulate image load error
        img.dispatchEvent(new Event('error'));
        await el.updateComplete;

        // Should fallback to initials or slot content
        const initialsElement = el.shadowRoot!.querySelector('.avatar-initials');
        expect(initialsElement || el.shadowRoot!.querySelector('slot')).to.exist;
      }
    });

    it('should show loading state while image loads', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/avatar.jpg" loading></mz-avatar>
      `);

      expect(el.loading).to.be.true;
      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.classList.contains('avatar--loading')).to.be.true;
    });
  });

  describe('initials generation', () => {
    it('should generate initials from name', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John Doe"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials).to.exist;
      expect(initials?.textContent?.trim()).to.equal('JD');
    });

    it('should handle single name', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.trim()).to.equal('J');
    });

    it('should handle multiple names', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John Michael Doe Smith"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.trim()).to.equal('JD');
    });

    it('should handle empty name', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name=""></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.trim()).to.equal('');
    });

    it('should handle special characters in name', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="José María"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.trim()).to.equal('JM');
    });
  });

  describe('sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach(size => {
      it(`should apply ${size} size`, async () => {
        const el = await fixture<MzAvatar>(html`
          <mz-avatar size="${size}" name="John Doe"></mz-avatar>
        `);

        expect(el.size).to.equal(size);
        expect(el.getAttribute('size')).to.equal(size);
      });
    });

    it('should default to md size', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      expect(el.size).to.equal('md');
    });
  });

  describe('shapes', () => {
    const shapes = ['circle', 'square', 'rounded'] as const;

    shapes.forEach(shape => {
      it(`should apply ${shape} shape`, async () => {
        const el = await fixture<MzAvatar>(html`
          <mz-avatar shape="${shape}" name="John"></mz-avatar>
        `);

        expect(el.shape).to.equal(shape);
        const avatar = el.shadowRoot!.querySelector('.avatar');
        expect(avatar?.classList.contains(`avatar--${shape}`)).to.be.true;
      });
    });

    it('should default to circle shape', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      expect(el.shape).to.equal('circle');
      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.classList.contains('avatar--circle')).to.be.true;
    });
  });

  describe('clickable behavior', () => {
    it('should not be clickable by default', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      expect(el.clickable).to.be.false;
      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.classList.contains('avatar--clickable')).to.be.false;
    });

    it('should apply clickable styles when clickable is true', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar clickable name="John"></mz-avatar>
      `);

      expect(el.clickable).to.be.true;
      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.classList.contains('avatar--clickable')).to.be.true;
    });

    it('should emit click event when clickable and clicked', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar clickable name="John"></mz-avatar>
      `);

      let eventDetail: any = null;
      el.addEventListener('mz-avatar-click', (e: any) => {
        eventDetail = e.detail;
      });

      const avatar = el.shadowRoot!.querySelector('.avatar') as HTMLElement;
      avatar.click();
      await el.updateComplete;

      expect(eventDetail).to.exist;
      expect(eventDetail.name).to.equal('John');
    });

    it('should not emit click event when not clickable', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      let eventFired = false;
      el.addEventListener('mz-avatar-click', () => {
        eventFired = true;
      });

      const avatar = el.shadowRoot!.querySelector('.avatar') as HTMLElement;
      avatar.click();
      await el.updateComplete;

      expect(eventFired).to.be.false;
    });
  });

  describe('status indicator', () => {
    it('should not show status by default', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status).to.not.exist;
    });

    it('should show online status', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John" status="online"></mz-avatar>
      `);

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status).to.exist;
      expect(status?.classList.contains('avatar-status--online')).to.be.true;
    });

    it('should show offline status', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John" status="offline"></mz-avatar>
      `);

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status).to.exist;
      expect(status?.classList.contains('avatar-status--offline')).to.be.true;
    });

    it('should show away status', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John" status="away"></mz-avatar>
      `);

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status).to.exist;
      expect(status?.classList.contains('avatar-status--away')).to.be.true;
    });

    it('should show busy status', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John" status="busy"></mz-avatar>
      `);

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status).to.exist;
      expect(status?.classList.contains('avatar-status--busy')).to.be.true;
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes for image', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/avatar.jpg" alt="User Avatar"></mz-avatar>
      `);

      const img = el.shadowRoot!.querySelector('img');
      expect(img?.getAttribute('alt')).to.equal('User Avatar');
    });

    it('should have proper ARIA attributes for initials', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="John Doe"></mz-avatar>
      `);

      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.getAttribute('aria-label')).to.include('John Doe');
    });

    it('should be focusable when clickable', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar clickable name="John"></mz-avatar>
      `);

      const avatar = el.shadowRoot!.querySelector('.avatar') as HTMLElement;
      expect(avatar.tabIndex).to.equal(0);
    });

    it('should not be focusable when not clickable', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      const avatar = el.shadowRoot!.querySelector('.avatar') as HTMLElement;
      expect(avatar.tabIndex).to.equal(-1);
    });

    it('should support keyboard interaction when clickable', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar clickable name="John"></mz-avatar>
      `);

      let eventFired = false;
      el.addEventListener('mz-avatar-click', () => {
        eventFired = true;
      });

      const avatar = el.shadowRoot!.querySelector('.avatar') as HTMLElement;
      const event = new KeyboardEvent('keydown', { key: 'Enter' });
      avatar.dispatchEvent(event);

      expect(eventFired).to.be.true;
    });
  });

  describe('CSS custom properties', () => {
    it('should support custom size', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar style="--avatar-size: 60px;" name="John"></mz-avatar>
      `);

      expect(el.style.getPropertyValue('--avatar-size')).to.equal('60px');
    });

    it('should support custom background color', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar style="--avatar-bg: #ff6b6b;" name="John"></mz-avatar>
      `);

      expect(el.style.getPropertyValue('--avatar-bg')).to.equal('#ff6b6b');
    });
  });

  describe('edge cases', () => {
    it('should handle very long names', async () => {
      const longName = 'Very Long Name With Many Words To Test';
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="${longName}"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.length).to.be.lessThanOrEqual(3);
    });

    it('should handle names with numbers', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="User123 Test456"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials?.textContent?.trim()).to.equal('UT');
    });

    it('should handle emoji in names', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar name="🚀 Rocket User"></mz-avatar>
      `);

      const initials = el.shadowRoot!.querySelector('.avatar-initials');
      expect(initials).to.exist;
    });

    it('should handle dynamic property changes', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      el.size = 'lg';
      el.shape = 'square';
      el.clickable = true;
      el.status = 'online';
      await el.updateComplete;

      const avatar = el.shadowRoot!.querySelector('.avatar');
      expect(avatar?.classList.contains('avatar--square')).to.be.true;
      expect(avatar?.classList.contains('avatar--clickable')).to.be.true;

      const status = el.shadowRoot!.querySelector('.avatar-status');
      expect(status?.classList.contains('avatar-status--online')).to.be.true;
    });

    it('should handle switching between image and initials', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John Doe"></mz-avatar>`);

      // Start with initials
      let initials = el.shadowRoot!.querySelector('.avatar-initials');
      let img = el.shadowRoot!.querySelector('img');
      expect(initials).to.exist;
      expect(img).to.not.exist;

      // Switch to image
      el.src = '/avatar.jpg';
      await el.updateComplete;

      initials = el.shadowRoot!.querySelector('.avatar-initials');
      img = el.shadowRoot!.querySelector('img');
      expect(initials).to.not.exist;
      expect(img).to.exist;

      // Switch back to initials
      el.src = '';
      await el.updateComplete;

      initials = el.shadowRoot!.querySelector('.avatar-initials');
      img = el.shadowRoot!.querySelector('img');
      expect(initials).to.exist;
      expect(img).to.not.exist;
    });

    it('should handle multiple rapid state changes', async () => {
      const el = await fixture<MzAvatar>(html`<mz-avatar name="John"></mz-avatar>`);

      // Rapidly change properties
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
      const shapes = ['circle', 'square', 'rounded'] as const;

      for (let i = 0; i < 10; i++) {
        el.size = sizes[i % sizes.length];
        el.shape = shapes[i % shapes.length];
        el.clickable = i % 2 === 0;
        await el.updateComplete;
      }

      // Should end in a valid state
      expect(el.size).to.be.oneOf(sizes);
      expect(el.shape).to.be.oneOf(shapes);
      expect(el.clickable).to.be.a('boolean');
    });

    it('should maintain aspect ratio for non-square images', async () => {
      const el = await fixture<MzAvatar>(html`
        <mz-avatar src="/wide-image.jpg" alt="Wide image"></mz-avatar>
      `);

      const img = el.shadowRoot!.querySelector('img');
      expect(img?.style.objectFit).to.equal('cover');
    });
  });
});