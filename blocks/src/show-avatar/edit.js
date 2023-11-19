/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
	useBlockProps, 
	InspectorControls,
	InspectorAdvancedControls,
	BlockControls
} from '@wordpress/block-editor';

import ServerSideRender from '@wordpress/server-side-render';

import { useSelect } from '@wordpress/data';

import {
	RadioControl,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	Spinner,
	TextControl,
	RangeControl,
	ColorPicker,
	PanelColorSettings,
	CheckboxControl,
	TextareaControl
} from '@wordpress/components';

import metadata from './block.json';

import RolesCheckBoxes from './components/RolesCheckBoxes';
import DisplayCheckBoxes from './components/DisplayCheckBoxes';
import BlogsCheckBoxes from './components/BlogsCheckBoxes';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	let data = useSelect( ( select ) => {
		return wp.apiFetch({path: '/author_avatar/blocks/v1/data'}).then(data => {
					return {
						user_options: data.users,
						display_options: data.display_options,
						user_roles: data.roles,
						user_links: data.links,
						sort_list: data.sort_avatars_by,
						blogs_list: data.blogs,
						DonateButton: data.donate,
					}
				}
			)
	} )

	const blockProps = useBlockProps();

	const { 
		user_id,
		link,
		sort_avatars_by,
		sort_order,
		size,
		display,
		limit,
		page_size,
		min_post_count,
		hidden_users,
		whitelist_users,
		user_options = data.user_options,
		display_options = data.display_options,
		user_roles = data.user_roles,
		user_links = data.user_links,
		sort_list = data.sort_list,
		blogs_list = data.blogs_list,
		DonateButton = data.DonateButton
	 } = attributes;

	 function onChangeUser(content) {
		setAttributes({user_id: content})
	}

	function onChangelink(content) {
		setAttributes({link: content})
	}

	function onChangeSortBy(content) {
		setAttributes({sort_avatars_by: content})
	}

	function onChangeSortOrder(content) {
		setAttributes({sort_order: content})
	}

	function onChangeSize(content) {
		setAttributes({size: content})
	}

	function onChangeLimit(content) {
		setAttributes({limit: content})
	}

	function onChangePageSize(content) {
		setAttributes({page_size: content})
	}

	function onChangeMinPosts(content) {
		setAttributes({min_post_count: content})
	}

	function onChangeHiddenUsers(content) {
		props.setAttributes({hidden_users: content})
	}

	function onChangeWhitelistUsers(content) {
		props.setAttributes({whitelist_users: content})
	}
	// @todo - figure out how to make render return wait for data to be available
console.log(data)
console.log(user_options)
	return (
		<>
			<InspectorControls key={'000'}>
					<div className="author-avatar-components-panel">
						<SelectControl
							label={__('User or Email address/user_id or Roles', 'author-avatar')}
							name='user_id'
							value={user_id}
							options={[1, 2 , 3]}
							// options={user_options}
							onChange={onChangeUser}
						/>
						{-1 == user_id && (

							<TextControl
								label='Custom email / id'
								type={'text'}
								value={email}
								onChange={onChangeEmail}
							/>

						)}
						{0 == user_id && (
							<Fragment>
								<label
									className="blocks-base-control__label">{__('Which Roles to display:', 'author-avatar')}</label>

								<RolesCheckBoxes attributes={ attributes }/>
							</Fragment>
						)}
						<label
							className="blocks-base-control__label">{__('Info to show with avatar:', 'author-avatar')}</label>
						<DisplayCheckBoxes attributes={ attributes }/>


						<SelectControl
							label={__('Link avatars to', 'author-avatar')}
							value={link}
							options={user_links}
							onChange={onChangelink}
						/>

						<SelectControl
							label={__('Sort by', 'author-avatar')}
							value={sort_avatars_by}
							options={sort_list}
							onChange={onChangeSortBy}
						/>

						<SelectControl
							label={__('Sort order', 'author-avatar')}
							value={sort_order}
							options={[
								{label: 'Ascending', value: 'asc'},
								{label: 'Descending', value: 'desc'},
							]}
							onChange={onChangeSortOrder}
						/>

						<RangeControl
							label="Avatar Size"
							value={size}
							onChange={onChangeSize}
							min={10}
							max={500}
							initialPosition={50}
							beforeIcon={'businessman'}
						/>

						<Fragment>
							<a className={'donate'}
							   href={'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MZTZ5S8MGF75C&lc=CA&item_name=Author%20Avatars%20Plugin%20Support&item_number=authoravatars&currency_code=CAD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted'}
							   target={'_donante'}>
								<img alt={'Donate to support Plugin'}
									 src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"/>
							</a>
						</Fragment>
						<div>
							<label
								className="blocks-base-control__label">{__('More options in Adavanced:', 'author-avatar')}</label>
						</div>
					</div>
				</InspectorControls>,

				<InspectorAdvancedControls key={'111'}>
						{/* 
						@todo make a new attribute for this
						{true === display.show_biography && (
						<RangeControl
							label="bio_length"
							value={bio_length}
							onChange={onChangebio_length}
							min={10}
							max={200}
							initialPosition={50}
						/>
					)} */}
					{0 == user_id && (
						<Fragment>
							<TextControl
								label={__('Max. avatars shown:', 'author-avatar')}
								type={'number'}
								value={limit}
								name={'limit'}
								onChange={onChangeLimit}
							/>

							<TextControl
								label={__('Max. avatars per page:', 'author-avatar')}
								type={'number'}
								value={page_size}
								name={'limit'}
								onChange={onChangePageSize}
							/>

							<TextControl
								label={__('Required number of posts:', 'author-avatar')}
								type={'number'}
								value={min_post_count}
								name={'limit'}
								onChange={onChangeMinPosts}
							/>

							<TextareaControl
								label={__('Hidden users', 'author-avatar')}
								help={__('(Comma separate list of user login ids. Hidden user are removed before the white list)', 'author-avatar')}
								value={hidden_users}
								onChange={onChangeHiddenUsers}
							/>

							<TextareaControl
								label={__('White List of users:', 'author-avatar')}
								help={__('(0nly show these users, Comma separate list of user login ids)', 'author-avatar')}
								value={whitelist_users}
								onChange={onChangeWhitelistUsers}
							/>

							{/* 
								@todo - This component throws an error - find out why
							*/}
							<BlogsCheckBoxes attributes={attributes} /> 
						</Fragment>
					)}

				</InspectorAdvancedControls>


				<div {...blockProps} key={'222'}>
					<ServerSideRender block={metadata.name} attributes={attributes}/>
				</div>
		</>
	);
}
