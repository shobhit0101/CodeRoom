import { useRef } from 'react';
import { Text, Group, Button, createStyles, rem } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, MIME_TYPES, MS_EXCEL_MIME_TYPE, MS_POWERPOINT_MIME_TYPE, MS_WORD_MIME_TYPE } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        marginBottom: rem(30),
    },

    dropzone: {
        borderWidth: rem(1),
        paddingBottom: rem(50),
    },

    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },

    control: {
        position: 'absolute',
        width: rem(250),
        left: `calc(50% - ${rem(125)})`,
        bottom: rem(-20),
    },
}));

const DropzoneButton = ({ setFiles }) => {
    const { classes, theme } = useStyles();
    const openRef = useRef(null);

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={setFiles}
                className={classes.dropzone}
                radius="md"
                accept={[MIME_TYPES.pdf, IMAGE_MIME_TYPE, MS_WORD_MIME_TYPE, MS_EXCEL_MIME_TYPE, MS_POWERPOINT_MIME_TYPE, MIME_TYPES.zip]}
                maxSize={30 * 1024 ** 2}
                h={'100px'}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Group position="center">
                        <Dropzone.Accept>
                            <IconDownload
                                size={rem(15)}
                                color={theme.colors[theme.primaryColor][6]}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size={rem(50)} color={theme.colors.red[6]} stroke={1.5} />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload
                                size={rem(50)}
                                color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>
                    </Group>

                    {/* <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Drop files here</Dropzone.Accept>
                        <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                        <Dropzone.Idle>Upload Files</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
                        are less than 30mb in size.
                    </Text> */}
                </div>
            </Dropzone>

            <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
                Upload files
            </Button>
        </div >
    );
}

export default DropzoneButton;